const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
	{
		name: 'Miyah Myles',
		position: 'Marketing',
		photo: 'https://randomuser.me/api/portraits/women/46.jpg',
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum minima odit corrupti! Ea iure quaerat dolor sed quis asperiores nostrum nulla enim itaque, ipsum optio obcaecati consequatur molestiae sapiente ullam? Corporis excepturi voluptatum laborum beatae numquam doloremque vel, unde corrupti veritatis reiciendis! Debitis doloribus laborum nisi ipsa asperiores unde molestias?"
	},

	{
		name: 'Daniel Dion',
		position: 'Sales',
		photo: 'https://randomuser.me/api/portraits/men/41.jpg',
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia blanditiis, dolor, laboriosam rerum eligendi alias autem corporis debitis reiciendis animi voluptates incidunt? Saepe rerum ratione officia odit delectus, harum nisi quo sequi pariatur consequuntur, incidunt reiciendis inventore."
	},

	{
		name: 'Sarah Sails',
		position: 'Administration',
		photo: 'https://randomuser.me/api/portraits/women/35.jpg',
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem officiis accusamus dicta minima, ut quae! Similique suscipit error voluptatum id, eaque autem, dolorem molestiae consequatur dignissimos asperiores accusamus illo exercitationem quos debitis dolorum blanditiis vitae minima rerum natus ex totam. Eligendi iste error laboriosam."
	}
]

let index = 1;

function updateTestimonial () {

	console.log(`Index 1: ${index}`)

	const {name, position, photo, text} = testimonials[index];
	testimonial.innerHTML = text;
	userImage.src = photo;
	userName.innerHTML = name;
	role.innerHTML = position;

	index++

	if(index > testimonials.length -1) {
		index = 0;
	}
}

setInterval(updateTestimonial, 10000);