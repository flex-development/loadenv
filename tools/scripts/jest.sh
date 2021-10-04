#!/bin/bash

# Testing Workflow
#
# Refernces:
#
# - https://jestjs.io/docs/next/cli
# - https://github.com/hipstersmoothie/jest-github-reporter

# 1. Clear terminal
# 2. Source environment variables
# 3. Run Jest
clear
. ./.env.test ./.env
NODE_OPTIONS='' jest -i --passWithNoTests --testLocationInResults $@
