import json
import boto3
import os

s3 = boto3.client('s3')
elastictranscoder = boto3.client('elastictranscoder')

def lambda_handler(event, context):
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = event['Records'][0]['s3']['object']['key']

    pipeline_id = os.environ['PIPELINE_ID']
    preset_id = os.environ['PRESET_ID']

    response = elastictranscoder.create_job(
        PipelineId=pipeline_id,
        Input={
            'Key': key,
            'FrameRate': 'auto',
            'Resolution': 'auto',
            'AspectRatio': 'auto',
            'Interlaced': 'auto',
            'Container': 'auto',
        },
        Outputs=[
            {
                'Key': 'output-' + key,
                'PresetId': preset_id,
                'Rotate': 'auto',
            }
        ]
    )

    return {
        'statusCode': 200,
        'body': json.dumps('Transcoding job started: {}'.format(response['Job']['Id']))
    }
