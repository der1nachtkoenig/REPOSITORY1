const node_for_click = document.getElementById('for_click')

function find_edit() {
    const p1 = document.getElementsByTagName('pre')[1]
    p1.innerHTML = 'Rakhmanov'
    console.log(p1.innerHTML)

    const p2 = document.getElementsByTagName('pre')[2]
    p2.innerHTML = 'Michail'
    console.log(p2.innerHTML)

    const p3 = document.getElementsByTagName('pre')[3]
    p3.innerHTML = 'Sergeevich'
    console.log(p3.innerHTML)

    const p5 = document.getElementsByTagName('pre')[4]
    p5.innerHTML = 'IX.III.MMIV'
    console.log(p5.innerHTML)
}

node_for_click.addEventListener('click',find_edit)