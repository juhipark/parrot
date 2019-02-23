from django.contrib.staticfiles.views import serve
from django.http import Http404


def serve_dev_assets(request):
    """Serving compiled JS assets during development

    During development, Django collects the static files so we can serve them
    via this view.
    """
    try:
        if request.path == '/':
            return serve(request, 'index.html')
        return serve(request, request.path)
    except Http404:
        # If we failed to find a static file, instead of raising a 404 error,
        # we serve the index file and let the frontend to render the 404 page.
        return serve(request, 'index.html')
