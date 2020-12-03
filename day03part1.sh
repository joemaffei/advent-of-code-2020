awk 'substr($0, 3*(NR-1)%31+1, 1)=="#"{count++} END {print count}' day03.txt
