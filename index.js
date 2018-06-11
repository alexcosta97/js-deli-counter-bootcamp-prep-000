function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine[0] === undefined)
  {
    return `There is nobody waiting to be served!`;
  }
  else
  {
    name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine)
{
  if(katzDeliLine[0] === undefined)
  {
    return `The line is currently empty.`;
  }
  else
  {
    var string = '';
    for(var i = 0; i < katzDeliLine.length; i++)
    {
      string += katzDeliLine[i];
    }
    return string;
  }
}