// display: flex;  ||| direction of divs horizontal by default
// display-direction: row ||| direction of divs horizontal manually
// display-direction: column ||| direction of divs vertical manually

ALIGNING HORIZONTALLY
// justify-content; ||| aligns items on the main(x) axis
// justify-content: flex-start; ||| aligns to the start
// justify-content: flex-end; ||| aligns to the end
// justify-content: center; ||| aligns to the center
// justify-content: space-between; ||| adds spaces between each element
// justify-content: space-around; ||| adds spaces between each element and the edges
// justify-content: space-evenly; ||| evenly distributes space between items

ALIGNING VERTICALLY
align-tems: flex-start; // aligns items on the cross(y) axis at the top 
align-tems: flex-end; // aligns items on the cross(y) axis at the end 
align-tems: center; // aligns items on the cross(y) axis at the center 

// !IF direction==column --> MAIN AXIS IS VERTICAL, NOT HORIZONTAL!

WRAPPING
flex-wrap: wrap // items are located normally, if no space --> goes to the next line
|
 - - > align-content unlocked // same operations as align-tems, for aligning all the items

flex-wrap: nowrap // items are located by pressing each other, trying to fit in one line

gap: 1em; // to add gaps to each boxes

.item-3{ // to modify third item
    flex-grow: 1; // grows if there is place
    flex-shrink: 5; // when minimizing screen size, shows how much third items shrinks compared to others
    flex-basis: 20px; // if you want to overwrite the default size if third item
    align-self: center; // if you want to overwrite the default alignation and replace the individual item
    order: 1; // to change the order of item in that block
}