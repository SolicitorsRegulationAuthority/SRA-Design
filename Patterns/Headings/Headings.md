# Headings

## Usage

As per HTML spec, headings can only move one level down but jump up any amount. 

### Example 
```
<h1></h1> 
<h2></h2>
<h3></h3> 

//is valid.

<h1></h1>
<h3></h3>
<h3></h3>  


//is not valid as it skips the h2. 
```
## Styling 

### Visual flow
To keep the visual flow where semantic structure is being disruptive - you can use the class name of the heading to give it the visual appearance of a heading element.

#### Example

```
<h2>This is heading two</h2>

<div class="h2">This is a div with the same style as a h2 heading</div>
```

### Headings close together

H2 headings default to a border-top to provide additional visual breaks in the page. 

Where headings naturally appear in close succession they can be presented with class of 'h2-no-border'. 

```
<h2 class="h2-no-border"></h2>
```