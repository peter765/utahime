# Utahime

This is an example of how to create a music bot using @discordjs/voice alongside [discord.js](https://github.com/discordjs/discord.js).

Forked from the [DiscordJS Voice examples](https://github.com/discordjs/voice), this just uses the YouTube Music Bot

## ToDo:
* Documentation on how to use PM2
* Support for other websites(niconico, bilibili)
* Allow users to play a certain playlist or song by default
* Change quality settings via bot commands

## Usage

```bash
# Clone the main repository, and then run:
$ npm install
$ npm run build

# Open this example and install dependencies
$ cd examples/music-bot
$ npm install

# Set a bot token (see auth.example.json)
$ nano auth.json

# Start the bot!
$ npm start
```

## Code structure (from discord.js)

The bot code has been separated from the code that is specific to @discordjs/voice as much as possible. Within `src/music`, you will find code that is specific to this library and you can take inspiration from this when building your own music system.

On the other hand, `src/bot.ts` is discord.js-specific code that interacts with the music system above, as well as handling user commands given on Discord. This example uses a development build of Discord.js that supports slash commands.
