console.log("Auto roll extension is running...")

setTimeout(() => {
    document.getElementsByName('Time to Roll!').reload(true);
    document.getElementById("roll-button").click()
  }, 6000
)
