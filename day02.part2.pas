program day02part2;

uses
  RegExpr,
  Sysutils

var
  input: TextFile;
  line: string;
  count: integer;
  firstPosition: integer;
  secondPosition: integer;
  password: string;
  firstLetter: string;
  secondLetter: string;
  testLetter: string;
  parser: TRegExpr;

begin
  parser := TRegExpr.Create;
  parser.Expression := '(\d+)-(\d+)\s(\w):\s(\w+)';

  AssignFile(input, 'day02.txt');
  reset(input);
  count := 0;
  while not eof(input) do
  begin
    readln(input, line);

    parser.Exec(line);
    firstPosition := StrToInt(parser.Match[1]);
    secondPosition := StrToInt(parser.Match[2]);
    testLetter := parser.Match[3];
    password := parser.Match[4];

    firstLetter := copy(password, firstPosition, 1);
    secondLetter := copy(password, secondPosition, 1);

    if (
      (firstLetter <> secondLetter) and (
        (firstLetter = testLetter) or
        (secondLetter = testLetter)
      )
    ) then count := count + 1;

  end;
  CloseFile(input);

  writeln(count);
  readln;
end.
