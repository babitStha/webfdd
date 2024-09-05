        // Define the data for the slider items
        const sliderData = [
            { img: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Slider 01', paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?' },
            { img: 'https://plus.unsplash.com/premium_photo-1674506653774-6f51d6ebe799?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Slider 02', paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.' },
            { img: 'image/img3.jpg', title: 'Slider 03', paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?' },
            { img: 'image/img4.jpg', title: 'Slider 04', paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.' },
            { img: 'image/img5.jpg', title: 'Slider 05', paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?' },
        ];

        const container = document.getElementById('slider');

        const slider = document.createElement('div');
        slider.classList.add('slider');

        const list = document.createElement('div');
        list.classList.add('list');


        sliderData.forEach((item, index) => {
            const listItem = document.createElement('div');
            listItem.classList.add('item');
            if (index === 0) listItem.classList.add('active');

            const img = document.createElement('img');
            img.src = item.img;

            const content = document.createElement('div');
            content.classList.add('content');
            content.innerHTML = `
                <p></p>
                <h2>${item.title}</h2>
                <p>${item.paragraph}</p>
            `;
            listItem.appendChild(img);
            listItem.appendChild(content);

            list.appendChild(listItem);
        });
        const arrows = document.createElement('div');
        arrows.classList.add('arrows');
        arrows.innerHTML = `
            <button id="prev"><</button>
            <button id="next">></button>
        `;

         slider.appendChild(list);
        slider.appendChild(arrows);
        container.appendChild(slider);

