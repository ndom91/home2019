#!/bin/bash

for filename in *.md; do
  [ -e "$filename" ] || continue
  strlen=${#filename}
  strlen=$( expr $strlen - 11 )
  echo $strlen
  str=${filename:(-$strlen)} 
  str=${str::-3}
  echo $str
  mkdir $str
  mv $filename $str
done
