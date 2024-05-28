import http.server
import socketserver
import threading

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(('', PORT), Handler) as httpd:
    print(f'Serving HTTP on {PORT}...')
    httpd.serve_forever()
my_app = __import__('my_app')
my_app.main()