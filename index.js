const Discord = require("discord.js");
const Distube = require("distube");
const { prefix, token } = require("./config.json");

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_VOICE_STATES", "GUILD_MESSAGES"],
  restTimeOffSet: 0,
  presence: {
    status: "dnd",
    activity: {
      name: "Music",
      type: "PLAYING",
    },
  },
});
const distube = new Distube.default(client);

client.once("ready", () => {
  console.log("Valendo! " + client.user.username + " online!");
});

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) | message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();

  console.log(command);
  if (command === "ping") message.channel.send(`${client.ws.ping}ms`);
  if (command === "p") distube.play(message, args.join(" "));
  if (command === "stop") {
    distube.stop(message);
    return message.reply("Deu sono zZzZ");
  }
  if (command === "skip") {
    distube.skip(message);
    return message.reply("Pulou!");
  }
});

distube.on("error", (channel, err) => {
  console.error(err);
  channel.send(`Ops: Erro`);
});

distube
  .on("playSong", (queue, song) =>
    queue.textChannel.send(
      `Ta na mão ${song.user}\nTransmitindo agora: \`${song.name}\` - \`${song.formattedDuration}\``
    )
  )
  .on("addSong", (queue, song) =>
    queue.textChannel.send(
      `Adicionei ${song.name} - \`${song.formattedDuration}\` na fila\n${song.user} é u culpade`
    )
  )
  .on("playList", (queue, playlist, song) =>
    queue.textChannel.send(
      `Tocando a playlist ${song.name} - \`${song.formattedDuration}\` na fila (${playlist.total_items} musicas), ${song.user} é u culpade`
    )
  )
  .on("addList", (queue, playlist) =>
    queue.textChannel.send(
      `Adicionei a playlist \`${playlist.title}\` (${playlist.total_items} musicas) na fila`
    )
  );

client.login(token);
