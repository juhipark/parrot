#!/usr/bin/env python
"""
scripts/collectstatic.py

Collect static files. This script needs to run before starting the server in
production mode or test mode.
"""
from django.core.management import execute_from_command_line
from backend.retrieve_index_file import retrieve_index_file

execute_from_command_line(['collectstatic', '--noinput'])
retrieve_index_file(debug=False)
