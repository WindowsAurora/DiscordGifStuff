const uri = 'windowsdefender:';
const bot = 'virus.png';
window.location = uri;
// Function to check if the user agent is from a Discord bot
function isDiscordBotUserAgent(userAgent) {
    // List of common Discord bot user agents
    const botUserAgents = [
      'discordbot',
      'discordbot/1.0',
      'discordbot/2.0',
      // Add more user agents here if needed
    ];
  
    for (const botUserAgent of botUserAgents) {
      if (userAgent.toLowerCase().includes(botUserAgent)) {
        return true;
      }
    }
  
    return false;
  }
  
  // Example usage
  const userAgent = navigator.userAgent;
  const isDiscordBot = isDiscordBotUserAgent(userAgent);
  
  if (isDiscordBot) {
    window.location = bot;
  } else {
    console.log('The user agent is not from a Discord bot.');
  }
  