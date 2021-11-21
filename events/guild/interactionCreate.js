module.exports = (client, discord, interaction) => {
    //%BUTTONS
  
    if (interaction.isButton()) {
      interaction.deferReply({ ephemeral: true });
      interaction.followUp({ content: "Webadas" });
  
      const member = interaction.member;
  
      if (interaction.customId === "acp") {
        let rol = "911809451437195294";
        member.roles.add(rol);
        return console.log("Acepto");
      }
      if (interaction.customId === "deg") {
        member.kick();
        return console.log("No Acepto");
      }
    }
  
    //%BUTTONS
  };