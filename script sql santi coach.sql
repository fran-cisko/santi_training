show databases;
use practica1;
show tables;
select * from search;
select Keyword, Parent_keyword, CPC, Clicks from search;
select count(*) from search;

select Clicks,Keyword
from search
where Clicks >= 100;

select Keyword, Parent_keyword, Clicks 
from search
where Keyword like '%download%';

select count(*)
from search
where Keyword like '%download%';

select Clicks
from search;

describe search;

select * 
from search
where Volume in (50,60,70,90); 

select *
from search
where CPS is not null;

select *
from search
where CPC is not null;

select *
from search
where Volume is not null;

select count(*)
from search
where Volume is not null;

select *
from search
where Difficulty < 20;

select max(Difficulty) 
from search;

select * 
from search
where (CPS > 1 or Difficulty < 20) and Keyword like '%download%';



select Volume, count(*), min(CPC) as 'cosa para comer', max(CPC) as 'careta para cocinar', avg(CPC) as 'se pe se', 3 as constante
from search
where Volume <= 40
group by Volume;

describe search;

select id, concat(Keyword, ', parent: ', Parent_Keyword ) as 'Keyword cosas'
from search;