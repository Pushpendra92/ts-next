import axios from 'axios';
import ApartmentContainer from '../src/components/Apartments/ApartmentContainer';

let data = [
  {
    type: 'Studio',
    cost: '£113',
    no_of_bedrooms: 1,
    no_of_bathrooms: 1,
    max_number_of_residents: 2,
    updated_at: '2020-10-26 13:51:36.922242+00:00',
    file_name: 'Avant-Garde Serviced Apartments Shoreditch',
    image_url:
      'http://lh3.googleusercontent.com/wO7Inuv6TCL-61ujLjXSVVPPVe6JjWSXfPD4o54zup3SmVCrIxD0rW0Kt9f1zGPozB6pdXr2Xg86CBjtpMy7fv_s_BDKa--tKK-20szZ9eeoYto',
  },
  {
    type: '1 Bedroom',
    cost: '£162',
    no_of_bedrooms: 1,
    no_of_bathrooms: 1,
    max_number_of_residents: 2,
    updated_at: '2020-10-26 13:51:36.922316+00:00',
    file_name: 'Avant-Garde Serviced Apartments Shoreditch',
    image_url:
      'http://lh3.googleusercontent.com/gktvMbBTH6dldTdqSL0RLcqlu69GELxCaXiiFi4-hMhakjH-_1xCh_ExWTfGq0qfVCgtjq3crXfKb46Rf6D2nZeRtmJ8T2nlpXeqoDfCFUby2XU',
  },
  {
    type: '2 Bedroom',
    cost: '£217',
    no_of_bedrooms: 2,
    no_of_bathrooms: 1,
    max_number_of_residents: 4,
    updated_at: '2020-10-26 13:51:36.922389+00:00',
    file_name: 'Avant-Garde Serviced Apartments Shoreditch',
    image_url:
      'http://lh3.googleusercontent.com/bZdyimllQve3kHALFB28YnBjr23B8oyymV6KhLDSez1tikZ6vIAxfGyOZ0vWZBGK1WX1lAN4u7j6ed5KM-E6C9DF3MYa-FEJOUeoLMrX2UQiSj4o',
  },
  {
    type: '3 Bedroom',
    cost: '£289',
    no_of_bedrooms: 3,
    no_of_bathrooms: 1,
    max_number_of_residents: 6,
    updated_at: '2020-10-26 13:51:36.922468+00:00',
    file_name: 'Avant-Garde Serviced Apartments Shoreditch',
    image_url:
      'http://lh3.googleusercontent.com/e9lsO1RCwU0u2gKP49DtEA3IHDQokHJQQJ3Bp3ZkufdN35Ytmi0gajO_oV4bk-_djy0k51klLDSCBguEe-oMAAppfKpBUNkgi4cpfBts8klPx9c',
  },
];

export default function Home({ images }) {
  return <ApartmentContainer data={images} />;
}

export async function getServerSideProps({ query }) {
  let images;
  try {
    // images = await axios.get('http://localhost:4001/images');
  } catch (e) {
    console.log('please make sure json server is running on port 4001');
  }

  return {
    props: {
      // images: images.data,
      images: data,
    },
  };
}
