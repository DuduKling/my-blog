---
layout: post
title: "Markdown Style"
date: 2017-12-11 23:13:37 -0200
---

Este post é um teste de post com markdown, para estilizar os elementos possíveis. Vai ficar como um draft..

Futuro: Paginação/Barra de Pesquisa

<br>------------------------------------------------------------------------------------------------------------------------<br>

## Headings:

### Content Heading (3#)
#### Content Heading (4#)

<br>------------------------------------------------------------------------------------------------------------------------<br>

## Text Effects:
**Negrito**	<br>
*Itálico* <br>
~~Riscado~~

<br>------------------------------------------------------------------------------------------------------------------------<br>

## Quotes:
> Pardon my French

<br>------------------------------------------------------------------------------------------------------------------------<br>

## Quote code:
Só no meio de um texto. Tipo ```assim```, ok?

``` 
git status 
git commit
```

<br>------------------------------------------------------------------------------------------------------------------------<br>

## Highlight code:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

<br>------------------------------------------------------------------------------------------------------------------------<br>

## Links:
[GitHub Pages](https://pages.github.com/)
<br>
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/        "Google"
[2]: http://search.yahoo.com/  "Yahoo Search"
[3]: http://search.msn.com/    "MSN Search"

<br>------------------------------------------------------------------------------------------------------------------------<br>

## Lista sem ordem:
- George Washington
- John Adams
- Thomas Jefferson

<br>------------------------------------------------------------------------------------------------------------------------<br>

## Lista ordenada:
1. James Madison
2. James Monroe
3. John Quincy Adams

<br>------------------------------------------------------------------------------------------------------------------------<br>

## Lista de tarefas:
- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request

<br>------------------------------------------------------------------------------------------------------------------------<br>

## Ignorar Markdown:
Para ignorar um caracter especial do markdown usa-se a contra-barra (\\). Ex: \*Não está em negrito\*.

<br>------------------------------------------------------------------------------------------------------------------------<br>

## Table:

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

<br>------------------------------------------------------------------------------------------------------------------------<br>

## Imagens:

![Blog Icon]({{ "/assets/icon.ico" | prepend: site.baseurl }} "Icon")

![alt text][id]

[id]: {{ "/assets/icon.ico" | prepend: site.baseurl }} "Title"


