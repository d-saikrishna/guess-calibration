BG.plays = 0;
BG.stop = false;
BG.games = [BG.quiz1,
  new BG.CoinProcess(0.5),
  new BG.CoinProcess(0.9),
  new BG.MaskedRepeatedProcess("Coins from Urn Anise", new BG.RandomCoinProcess({}), {
    initialmessage: "I have a mysterious urn labelled \"Anise\" full of coins, each with possibly different probabilities."
  }),
  new BG.MaskedRepeatedProcess("Coins from Urn Basil", new BG.RandomCoinFromEnvelopeProcess({}), {
    initialmessage: "I have a mysterious urn labelled \"Basil\" full of coins, each with possibly different probabilities."
  }),
  new BG.MaskedProcess('Mystery Game Apricot', new BG.CoinProcess(0.621711006318219), {}),
  new BG.MaskedProcess('Mystery Game Banana', new BG.SimpleMarkovProcess([0.15, .7], 1, [0]), {})
];

$(document).ready(function() {
  BG.setup();
  BG.start_game(0);
});
