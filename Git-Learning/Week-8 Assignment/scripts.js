// Nature Element App
class NatureElement {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }

    describe() {
        return `${this.name} - Category: ${this.category}`;
    }
}

// Class for Nature Menu
class NatureMenu {
    constructor() {
        this.natureElements = [];
    }

    // Add a new nature element
    addNatureElement(name, category) {
        const element = new NatureElement(name, category);
        this.natureElements.push(element);
        return `${name} added to the nature elements list.`;
    }

    // View all nature elements
    viewNatureElements() {
        if (this.natureElements.length === 0) {
            return "Nature elements list is empty.";
        } else {
            return this.natureElements.map(element => element.describe()).join("\n");
        }
    }

    // Delete a nature element by name
    deleteNatureElement(name) {
        const index = this.natureElements.findIndex(element => element.name === name);
        if (index !== -1) {
            this.natureElements.splice(index, 1);
            return `${name} deleted from the nature elements list.`;
        } else {
            return `${name} not found in the nature elements list.`;
        }
    }
}

// Application Menu
const natureMenu = new NatureMenu();

function startMenu() {
    let choice;
    do {
        choice = prompt(`Menu:
        1. Add a new nature element
        2. View all nature elements
        3. Delete a nature element
        0. Exit`);
        
        switch (choice) {
            case '1':
                const name = prompt("Enter the name of the nature element:");
                const category = prompt("Enter the category of the nature element (e.g., plant, animal):");
                alert(natureMenu.addNatureElement(name, category));
                break;
            case '2':
                alert(natureMenu.viewNatureElements());
                break;
            case '3':
                const elementName = prompt("Enter the name of the nature element to delete:");
                alert(natureMenu.deleteNatureElement(elementName));
                break;
            case '0':
                alert("Exiting the program.");
                break;
            default:
                alert("Invalid choice. Please try again.");
        }
    } while (choice !== '0');
}

startMenu();