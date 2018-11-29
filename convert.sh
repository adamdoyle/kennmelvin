#!/bin/bash

for filename in *.M1V; do
	NAME=$(basename $filename .M1V)
	ffmpeg -i "$filename" "${NAME}.M4V"
done
