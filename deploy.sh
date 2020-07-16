#!/bin/bash

set -e

rsync -azP ./front/dist/ root@47.102.196.249:/var/www/dist/