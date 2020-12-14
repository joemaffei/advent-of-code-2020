awk '{ \
  if (substr($0,   (NR-1)%31+1, 1)=="#") a++; \
  if (substr($0, 3*(NR-1)%31+1, 1)=="#") b++; \
  if (substr($0, 5*(NR-1)%31+1, 1)=="#") c++; \
  if (substr($0, 7*(NR-1)%31+1, 1)=="#") d++; \
  if (NR%2==1 && substr($0, (NR/2)%31+.5, 1)=="#") e++ \
} \
END { \
  print a*b*c*d*e \
}' day03.txt
