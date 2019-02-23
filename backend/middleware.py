from whitenoise.middleware import WhiteNoiseMiddleware


class StaticFilesServingMiddleware(WhiteNoiseMiddleware):
    def process_request(self, request):
        """Override the `process_request` method in WhiteNoiseMiddleware

        If we failed to find a static file, instead of raising a 404 error, we
        serve the index file and let the frontend to render the 404 page.
        """
        par = super(StaticFilesServingMiddleware, self)
        response = par.process_request(request)
        if response is not None:
            return response
        request.path_info = '/'
        return par.process_request(request)
