// pages/index.tsx
import { GetServerSideProps } from 'next'
import supabase from '../lib/supabaseClient'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'



type Project = {
  id: number;
  title: string;
  description: string;
};

type HomeProps = {
  projects: Project[];
};

const Home = ({ projects }: HomeProps) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
      <p className="mb-4">Welcome to my portfolio. Here are some of my projects:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col justify-between">
            <CardHeader className="bg-black text-white flex-row gap-4 items-center">
              <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <CardDescription className="text-gray-700">{project.description}</CardDescription>
            </CardContent>
            <CardFooter className= "flex justify-between">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">View Project</button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*');

  if (error) {
    console.error('Error fetching projects:', error);
    return { props: { projects: [] } };
  }

  return {
    props: {
      projects,
    },
  };
};

export default Home;