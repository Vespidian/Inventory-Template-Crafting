function onCraft (item0, item1, item2, item3, itemN, amount) {
  var img = possibleItems[itemN].itemImage;
  if ((cInventory[0].item == item0) && (cInventory[1].item == item1) && (cInventory[2].item == item2) && (cInventory[3].item == item3)){
    outSlot[0].item = possibleItems[itemN].itemName;
    outSlot[0].itemNumber = possibleItems[itemN].itemNumber;
    outSlot[0].itemAmount = amount;
    outSlot[0].empty = false;
    document.getElementById(outSlot[0].slotId).innerHTML = img;
    document.getElementById(outSlot[0].slotId).innerHTML = document.getElementById(outSlot[0].slotId).innerHTML + "<p>" + outSlot[0].itemAmount + "</p>";
  }
}



const recipes = [
  sand = ["Dirt", "Grass", "empty", "empty", 3, 4],
  dirt = ["Leaves", "Leaves", "Leaves", "Leaves", 2, 1],
]

//___ = ["", "", "", "", itemNumber_of_output, amount];



function setRecipes() {
  onCraft.apply(this, dirt);
  onCraft.apply(this, sand);
}
