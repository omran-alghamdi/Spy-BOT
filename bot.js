import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio

Client = discord.Client ()
client = commands.Bot (command_prefix = "!!")

@client.event
async  def on_ready () :
    print("bot is ready")
@client.event
async def on_message(message) :
    if message.content.startswith('السلام عليكم') :
        userID = message.author.id
        await client.send_message (message.channel, "<@%s> وعليكم السلام ورحمة الله وبركاته منور" % (userID))

    if message.content.startswith('بروح') :
        userID = message.author.id
        await client.send_message (message.channel, "<@%s> روحة بلا رجعه...امزح ننتظرك حبيبي" % (userID))

    if message.content.startswith('بنام') :
        userID = message.author.id
        await client.send_message (message.channel, "<@%s> نوم العوافي" % (userID))

    if message.content.startswith('صح ولا لا') :
        userID = message.author.id
        await client.send_message (message.channel, "<@%s> اكيد صح افا عليك" % (userID))

    if message.content.startswith('فزعة') :
        userID = message.author.id
        await client.send_message (message.channel, "<@%s> ابد تحزم جيبه وربي بالرشاش" % (userID))

    if message.content.startswith('الله يوفقك') :
        userID = message.author.id
        await client.send_message (message.channel, "<@%s> امين" % (userID))

    if message.content.startswith('برب') :
        userID = message.author.id
        await client.send_message (message.channel, "<@%s> تيت لاتطول" % (userID))

    if message.content.startswith('عن اذنكم') :
        userID = message.author.id
        await client.send_message (message.channel, "<@%s> اذنك معك" % (userID))

    if message.content.startswith('سلام'):
            userID = message.author.id
            await client.send_message(message.channel, "<@%s> سلام :heart:" % (userID))

    if message.content.startswith('تعبان'):
        userID = message.author.id
        await client.send_message(message.channel, "<@%s> فديت التعبانين انا :heart:" % (userID))

    if message.content.startswith('كل زق'):
        userID = message.author.id
        await client.send_message(message.channel, "<@%s> ما يصير تاكل نفسك ياخي" % (userID))


client.run ("NDQxMzA2MDkxNTk5NTYwNzA0.Dcu2qw.HSC8TukjOJDit1fmJ2If1jqJcNA")
