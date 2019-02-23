"""
backend/views.py

Backend common views. Read more at
    https://docs.djangoproject.com/en/2.1/ref/views/
"""
from django.contrib.staticfiles.views import serve
from django.views.generic import TemplateView


def serve_dev_assets(request):
    """Serving compiled JS assets during development

    During development, Django collects the static files so we can serve them
    via this view.
    """
    return serve(request, request.path)

# pylint: disable=invalid-name
index = TemplateView.as_view(template_name='index.html')

def error404(request, *args, **kwargs):
    """Error 404 Handler

    If we failed to find a static file, instead of raising a 404 error, we
    serve the index file and let the frontend to render the 404 page.
    """
    return index(request)
