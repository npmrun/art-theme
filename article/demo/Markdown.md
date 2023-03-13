---
title: Markdown
desc: Test Markdown
pubDate: 2022/8/31 00:07:30
author: Dash
# theme: normal
top: true
hero: "/placeholder-hero.jpg"
categories: 
    - Demo
---
## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

## H2

### H3

#### H4

##### H5

###### H6

## iframe

<iframe frameborder="0" height="200px" src="/demo/grid/demo.html"></iframe>

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

![This is a placeholder image desc](/placeholder-hero.jpg)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

```ts 测试文本表述
import fs = require('fs')

class MyClass {
  public static myValue: string
  constructor(init: string) {
    this.myValue = init
  }
}
namespace MyModule {
  export interface MyInterface extends Other {
    myProperty: any
  }
}

declare const magicNumber: number
myArray.forEach(() => { }) // fat arrow syntax
```

### MathJax
$\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$

$$	x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

## mermaid

### flow
```flow
flowchart TD
    A[/Christmas\]
    A -->|Get money| B[\Go shopping/]
    B --> C{Let me thinksssss<br/>ssssssssssssssssssssss<br/>sssssssssssssssssssssssssss}
    C -->|One| D[/Laptop/]
    C -->|Two| E[\iPhone\]
    C -->|Three| F[Car]
```

### sequence

```sequence
sequenceDiagram
			accTitle: test the accTitle
			accDescr: Test a description

			participant Alice
			participant Bob
			participant John as John<br />Second Line
			autonumber 10 10
			rect rgb(200, 220, 100)
			rect rgb(200, 255, 200)

			Alice ->> Bob: Hello Bob, how are you?
			Bob-->>John: How about you John?
			end

			Bob--x Alice: I am good thanks!
			Bob-x John: I am good thanks!
			Note right of John: John thinks a long<br />long time, so long<br />that the text does<br />not fit on a row.

			Bob-->Alice: Checking with John...
			Note over John:wrap: John looks like he's still thinking, so Bob prods him a bit.
			Bob-x John: Hey John - we're still waiting to know<br />how you're doing
			Note over John:nowrap: John's trying hard not to break his train of thought.
			Bob-x John:wrap: John! Are you still debating about how you're doing? How long does it take??
			Note over John: After a few more moments, John<br />finally snaps out of it.
			end

			autonumber off
			alt either this
			Alice->>+John: Yes
			John-->>-Alice: OK
			else or this
			autonumber
			Alice->>John: No
			else or this will happen
			Alice->John: Maybe
			end
			autonumber 200
			par this happens in parallel
			Alice -->> Bob: Parallel message 1
			and
			Alice -->> John: Parallel message 2
			end
```
## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

- List item
- Another item
- And another item

#### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
