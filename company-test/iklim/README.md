# Weather Forecast App

## Problem

Build a React application that displays the **5-day weather forecast** for a selected city using the **OpenWeather API**.

The application should use the provided `cityList.json` file to populate the city dropdown.

---

## Requirements

### 1. Display Cities

You are given a file named:

```
cityList.json
```

Each city contains information similar to:

```json
{
  "id": 1642911,
  "name": "Jakarta",
  "country": "ID"
}
```

Display all available cities inside a `<select>` element.

Example:

```
Choose City:

Jakarta
Bangkok
Singapore
```

---

### 2. Fetch Weather Data

Whenever the selected city changes, fetch weather data from:

```text
https://api.openweathermap.org/data/2.5/forecast
```

Use the selected city as the query parameter.

---

### 3. Group Weather by Date

The API returns weather data every 3 hours.

Group all data by date.

Example:

```text
2024-07-20
2024-07-21
2024-07-22
```

---

### 4. Calculate Daily Average Temperature

For each date:

- Calculate the average temperature.
- Display the result in Celsius.

Example:

| Date | Average Temperature |
|------|----------------------|
| 2024-07-20 | 29°C |
| 2024-07-21 | 30°C |

---

### 5. Calculate Daily Temperature Difference

For every weather record:

```
Difference = temp_max - temp_min
```

Then calculate the average difference for each day.

Example:

| Date | Avg Temperature | Avg Difference |
|------|-----------------|----------------|
| 2024-07-20 | 29°C | 2.15°C |
| 2024-07-21 | 30°C | 1.84°C |

---

### 6. Display Result

Display the data inside a table.

Example:

| Date | Temperature | Difference |
|------|-------------|------------|
| 2024-07-20 | 29°C | 2.15°C |
| 2024-07-21 | 30°C | 1.84°C |

---

### 7. Display Overall Average

At the bottom of the table, display:

- Average Temperature
- Average Temperature Difference

Example:

| Average | 30°C | 2.05°C |

---

## Constraints

- Use React Hooks (`useState`, `useEffect`).
- Use Axios to fetch data.
- Read the city list from `cityList.json`.
- The table should update automatically whenever the selected city changes.

---

## Bonus Challenges

### Bonus 1

Add a loading indicator while fetching data.

Example:

```
Loading...
```

---

### Bonus 2

Display an error message if the API request fails.

Example:

```
Unable to fetch weather data.
```

---

### Bonus 3

Convert Kelvin to Celsius correctly.

Formula:

```
Celsius = Kelvin - 273.15
```

---

### Bonus 4

Display the weather icon for each day using the icon provided by the API.

---

### Bonus 5

Allow users to search for a city by typing its name before selecting it from the dropdown.

---

## Topics Covered

- React
- useState
- useEffect
- Axios
- JSON
- Array Methods (`map`, `forEach`)
- Objects
- API Integration
- Data Transformation
- Conditional Rendering
