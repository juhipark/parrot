#!/bin/bash
# scripts/test_backend.sh

# We need to include those variables for testing PRs since Travis cannot
# disclose the secure branch environment variables. Read more at
#   https://docs.travis-ci.com/user/environment-variables/#defining-encrypted-variables-in-travisyml
export PARROT_CDN_HOST='https://cdn.progteam.org'
# If PARROT_ENV not set or null, use test env
export PARROT_ENV=${PARROT_ENV:-'test'}

# Create DB migrations before running the tests
python manage.py migrate && \
# Set environment to production to collect the static files
python manage.py collectstatic --noinput && \
# Run backend tests under debug mode
python manage.py test && \
# Run linter
pylint --load-plugins pylint_django **/*.py
