// // // var title1= document.getElementById('title-id');
// // // title1.style.border = '3px solid black';

// // // var title2= document.getElementsByClassName('title');
// // // title2.style.display = 'block';

// // // const list= document.getElementsByClassName('list-group-item')
// // // //let ulChild=ulParent.children;
// // // for(var i=0;i<list.length;i++) {
// // //     list[i].style.color='green';
// // //     list[i].style.fontWeight='bold';
// // // }

// // // const li= document.getElementsByTagName('li')
// // // //let ulChild=ulParent.children;
// // // for(var i=0;i<li.length;i++) {
// // //     li[i].style.color='green';
// // //     li[i].style.fontWeight='bold';
// // // }

// // const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.backgroundColor='green';

// // const thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// // thirdItem.style.display='none';

// const h2= document.querySelector('h2');
// console.log(h2.parentElement);

// const list= document.querySelector('.list-group');
// console.log(list.lastElementChild);

// console.log(list.lastChild);

// // var newDiv= list.createChild('div');
// // newDiv.className = 'div-created';

// console.log(list.firstElementChild);

// console.log(list.firstChild);

// const h= document.querySelector('.container h2');
// console.log(h.nextElementSibling);
// console.log(h.previousSibling);
// console.log(h.previousElementSibling);

// const new_item= document.createElement('li');
// new_item.className='list-group-item';

// const li_child= document.createTextNode('Item 5');
// new_item.appendChild(li_child);

// console.log(new_item);

// const ul= document.querySelector('.container ul');
// ul.appendChild(new_item);

// const text_node= document.createTextNode('HEllo');
// const new_h1= document.createElement('h1');
// new_h1.className = 'new_h1';
// new_h1.setAttribute('title','new_h1_att');
// new_h1.appendChild(text_node);

// const h1= document.querySelector('.container h1');
// const container= document.querySelector('header .container');

// container.insertBefore(new_h1,h1);

// const item1_b4_textNode= document.createTextNode('HEllo');
// const item1_h1= document.createElement('h1');
// item1_h1.className = 'new_h1';
// item1_h1.setAttribute('title','new_item1_att');
// item1_h1.appendChild(item1_b4_textNode);

// const ul_parent= document.querySelector('.list-group');
// const li_first= ul_parent.firstElementChild;

// ul_parent.insertBefore(item1_h1,li_first);

const form= document.querySelector('#addForm');
form.addEventListener('submit',addItem);
function addItem(e) {
    e.preventDefault();
    const itemList = document.querySelector('.list-group');
    const input_val1= document.getElementById('item1').value;
    const input_val2= document.getElementById('item2').value;
    const input_val=input_val1 +" "+input_val2;

    const new_it= document.createElement('li');
    new_it.className='list-group-item';
    new_it.appendChild(document.createTextNode(input_val));
    itemList.appendChild(new_it);

    const btn1= document.createElement('button');
    const btn2= document.createElement('button');
    btn1.className='btn btn-danger btn-sm float-right delete';
    //const edit= document.createElement('button');
    btn2.className='btn btn-info btn-sm float-right delete';
    
    btn2.appendChild(document.createTextNode('Edit'));
    btn1.appendChild(document.createTextNode('X'));
    new_it.appendChild(btn1);
    new_it.appendChild(btn2);
    
}

const ul= document.querySelector('#items');
ul.addEventListener('click',removeItem);
function removeItem(e){
    e.preventDefault;
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            const li= e.target.parentElement;
            ul.removeChild(li);
        }
    }
}

const filter= document.getElementById('filter');
filter.addEventListener('keyup',filtering);


function filtering(e)
{
    const text_search=e.target.value.toLowerCase();
    const items= ul.getElementsByTagName('li');
    Array.from(items).forEach(function(item)
    {
        const itemName = item.firstChild.textContent;
        //console.log(itemName);
        if(itemName.toLowerCase().indexOf(text_search)!=-1)
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
    });

}































