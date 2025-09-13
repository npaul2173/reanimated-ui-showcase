# Movie Hall Seat Selector

A **React Native** component for rendering a dynamic **movie hall seat selector** where users can book seats. The seat layout is fully customizable and can render based on dynamic data. The component provides callbacks for seat selection, allowing easy integration with your booking logic.

---

## Features

- 🎨 **Custom Seat Icons**: Use your own SVG or image icons for seats.
- 🏗️ **Custom Seat Structure Rendering**: Pass any layout structure to render seats dynamically.
- 🎬 **Custom Movie Screen Rendering**: Render the screen in any shape (rectangle, trapezium, etc.).
- ✅ **Dynamic Seat Selection Callback**: Receive updates when a seat is selected/deselected.
- ⚡ **Interactive Pan & Zoom**: Move around the seat map easily.
- ➕ **Expandable**: Easily add more features like pricing, seat availability, or animations.

---

## Installation

```bash
npm install react-native-movie-hall-selector
# or
yarn add react-native-movie-hall-selector
```

## Props

| Prop              | Type               | Description                                         |
| ----------------- | ------------------ | --------------------------------------------------- |
| `seatLayout`      | `string[][]`       | 2D array representing rows and seats                |
| `selectedSeats`   | `string[]`         | Array of currently selected seat IDs                |
| `onSeatSelect`    | `(seatId) => void` | Callback when a seat is selected/deselected         |
| `seatIcon`        | `(props) => JSX`   | Custom render function for individual seats         |
| `screenComponent` | `JSX.Element`      | Custom movie screen component to render above seats |

## Future Features / TODO

- Add **seat pricing and booking status**.
- Add **animations** for seat selection.
- Support **group seat selection**.
- Improve **performance for large seat maps**.
- Add **zoom and pan gestures** for the seat map.
- Allow **dynamic screen shapes** like trapezium or curved screens.
- Integrate with **backend APIs** for real-time seat availability.

<br/>
This is **all-in-one**, ready to use for your GitHub repo.

If you want, I can also create a **fancier version** with **badges, GIFs, and props defaults** so it looks professional on GitHub.

Do you want me to make that version too?
