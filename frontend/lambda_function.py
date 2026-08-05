def handler(event, context):
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'text/html'
        },
        'body': html
    }