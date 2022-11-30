# A7: Data Visualization

## Your name
Mame Coumba Ka

## Your Glitch link
[my page](https://coumbak-a7.glitch.me)


## What data sources are you using? Link the API/Kaggle/etc pages 

https://www.kaggle.com/code/jesscpa23/ny-times-bestseller-list-analysis/data



## Describe the format of the data

The data is a csv table that contains 12 fieldds [published_date : Date the list was published,
list_name: Book category,
list_name_encoded:	Encoded category,
rank:	Rank on the list for that week,
isbn13:	ISBN 13 of the book,
isbn10:	ISBN 10 of the book,
title:	Title of the book,
author:	Author of the book,
description:	Description of the book,
amazon_product_url:	Amazon URL,
price:	Price of the book,
weeks_on_list ]

## How did you pre-process your data, if at all?
I used python libraries Pandas and Numpy to preprocess my data and I converted my inital table in pd Dataframe before removing unecessary data, empty fields , removing stop words and punctuations. I was interested in the descriptions of the books that appeared in the bestsellers list so I did two different analysis , first I did a simple count frequency of all words in the description fields and then I performed a TF-IDF analysis to create a clustering of words. I also recorded which words appeared only once in the records since they could potentially be unique or rare words.  

## How are you visualizing the data?

 I am using tables and a tag cloud and I tried to recreate the visual of an New York Times newspaper.(https://s1.nyt.com/timesmachine/pages/1/1985/07/07/101315_360W.png?quality=75&auto=webp&disable=upscale)




## How are you visualizing the data?

--your answer here 



## What did you notice about this data that you didn't anticipate?

There were some themes brought out by the data clustering that I did not except.


## What do you want the visitor to your page to understand about this data?

 I want the visitor to understand the words thar are used to described to the books that rank in the New York Times Best Selles and think about the trends/impact these could create.



## List any resources (code, images, etc) you've used, and where you got them from

https://medium.com/mlearning-ai/text-clustering-with-tf-idf-in-python-c94cd26a31e7
## List any help you got from classmates or websites, so that you can remember it for later

--your answer here--