angular.module("app").service('QuestionService', function () {
    var service = {
    	getQuestion : function(id) {
    		return {title:"How to round the result of a computation to n decimal places in Java",content:'<div class="post-text" itemprop="text"><p>I can see that there are hundreds of posts on the subject of rounding decimal places.However, I have searched high and low and cannot seem to find a previous instance that matches my problem.I am pretty new to java.</p><p>I am trying to calculate the slope of a line, assign it to a variable and have the contents of that variable be formatted to 4 decimal places.</p><p>I have tried DecimalFormat (appears to return a string, I need a numerical value that can be used in another stage of calculations)I have tried BigDecimal (cannot seem to figure out how to construct it and setScale).<br>Below is my code:</p><pre class="lang-java prettyprint prettyprinted"><code><span class="kwd">import</span><span class="pln"> java</span><span class="pun">.</span><span class="pln">math</span><span class="pun">.</span><span class="typ">BigDecimal</span><span class="pun">;</span><span class="pln"></span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">class</span><span class="pln"> </span><span class="typ">Scratch</span><span class="pln"> </span><span class="pun">{</span><span class="pln"></span><span class="kwd">public</span><span class="pln"> </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">void</span><span class="pln"> main</span><span class="pun">(</span><span class="typ">String</span><span class="pun">[]</span><span class="pln"> args</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">throws</span><span class="pln"> </span><span class="typ">Exception</span><span class="pln"> </span><span class="pun">{</span><span class="pln"></span><span class="typ">BigDecimal</span><span class="pln"> slope1</span><span class="pun">,</span><span class="pln"> slope2</span><span class="pun">,</span><span class="pln"> slope3</span><span class="pun">;</span><span class="pln">slope1 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">BigDecimal</span><span class="pun">((</span><span class="lit">8</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> </span><span class="lit">8</span><span class="pun">)</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="pun">(</span><span class="lit">20</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> </span><span class="lit">5</span><span class="pun">));</span><span class="pln">slope2 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">BigDecimal</span><span class="pun">((</span><span class="lit">9</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> </span><span class="lit">8</span><span class="pun">)</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="pun">(</span><span class="lit">22</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> </span><span class="lit">5</span><span class="pun">));</span><span class="pln">slope3 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">BigDecimal</span><span class="pun">((</span><span class="lit">9</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> </span><span class="lit">8</span><span class="pun">)</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="pun">(</span><span class="lit">22</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> </span><span class="lit">20</span><span class="pun">));</span><span class="pln">slope1 </span><span class="pun">=</span><span class="pln"> slope1</span><span class="pun">.</span><span class="pln">setScale</span><span class="pun">(</span><span class="lit">4</span><span class="pun">);</span><span class="pln">slope2 </span><span class="pun">=</span><span class="pln"> slope1</span><span class="pun">.</span><span class="pln">setScale</span><span class="pun">(</span><span class="lit">4</span><span class="pun">);</span><span class="pln">slope3 </span><span class="pun">=</span><span class="pln"> slope1</span><span class="pun">.</span><span class="pln">setScale</span><span class="pun">(</span><span class="lit">4</span><span class="pun">);</span><span class="pln"></span><span class="typ">System</span><span class="pun">.</span><span class="pln">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="pln">slope1</span><span class="pun">);</span><span class="pln"></span><span class="typ">System</span><span class="pun">.</span><span class="pln">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="pln">slope2</span><span class="pun">);</span><span class="pln"></span><span class="typ">System</span><span class="pun">.</span><span class="pln">out</span><span class="pun">.</span><span class="pln">println</span><span class="pun">(</span><span class="pln">slope3</span><span class="pun">);</span><span class="pln"></span><span class="pun">}</span><span class="pln"></span><span class="pun">}</span></code></pre><p>The resulting output is:</p><pre class="lang-java prettyprint prettyprinted"><code><span class="lit">0.0000</span><span class="pln"></span><span class="lit">0.0000</span><span class="pln"></span><span class="lit">0.0000</span></code></pre><p>How to I construct the big data object, set its scale, and do the calculation in a way that will give the real result of the calculation to 4 decimal places and not 0.0000?</p><p>Any help would be greatly appreciated.Ive been messing with this for hours.</p></div>"',vote:8};
    	}
    }
    return service;
});