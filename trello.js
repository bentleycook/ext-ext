console.log('(╯°□°）╯︵');
$.ajax({
  url: "https://trello.com/1/boards/d2EnEWSY",
  headers: { 'x-trello-user-agent-extension': 'Bentley is alright.' }
})
.done((stuff) => console.log(stuff));