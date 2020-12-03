program day02part1;

uses
  fphttpclient;
  RegExpr,
  Sysutils;

var
  input: TextFile;
  line: string;
  count: Smallint;
  min: string;
  max: string;
  letter: string;
  password: string;
  parser: TRegExpr;
  tester: TRegExpr;

begin
  parser := TRegExpr.Create;
  parser.Expression := '(\d+)-(\d+)\s(\w):\s(\w+)';
  tester := TRegExpr.Create;

  AssignFile(input, 'day02.txt');
  reset(input);
  count := 0;
  while not eof(input) do
  begin
    readln(input, line);

    parser.Exec(line);
    min := parser.Match[1];
    max := parser.Match[2];
    letter := parser.Match[3];
    password := parser.Match[4];

    tester.Expression := '^(?:[^' + letter + ']*' + letter + '[^' + letter + ']*){' + min + ',' + max + '}$';

    if tester.Exec(password) then count := count + 1;
  end;
  CloseFile(input);

  writeln(count);
  readln;
end.
