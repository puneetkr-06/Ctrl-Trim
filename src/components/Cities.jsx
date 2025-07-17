import FlowingMenu from './ui/FlowingMenu'

const demoItems = [
  { link: '#', text: 'New Delhi', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Kanpur', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Haryana', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Mumbai', image: 'https://picsum.photos/600/400?random=4' },
  { link: '#', text: 'Punjab', image: 'https://picsum.photos/600/400?random=4' }

];
const Customer = () => { 
    return(
<div className='w-full flex flex-col justify-center items-center h-[500px] relative'>
  <h1 className="text-white text-4xl font-bold text-staat text-center pb-8">Cities We Serve</h1>
  <FlowingMenu items={demoItems} />
</div>
    )
}

export default Customer;