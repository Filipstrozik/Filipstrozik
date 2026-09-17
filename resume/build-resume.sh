#!/bin/sh
set -eu

cd "$(dirname "$0")"
latexmk -pdf -interaction=nonstopmode -halt-on-error \
  -jobname='Filip Strózik resume' \
  resume.tex
