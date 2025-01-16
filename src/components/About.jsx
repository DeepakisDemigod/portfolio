import React, { useState, useEffect } from 'react';
import { Button, Card, List, Typography, Avatar, Spin } from 'antd';
import {
  DownloadOutlined,
  MailOutlined,
  MessageOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const About = () => {
  const username = 'DeepakisDemigod';
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRepos = async () => {
    const url = `https://api.github.com/users/${username}/repos`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const reposData = await response.json();
      setRepos(reposData);
    } catch (error) {
      console.error('Failed to fetch repos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = 'Portfolio | Know About Me';
    fetchRepos();
  }, []);

  return (
    <div className='p-6 bg-black text-white'>
      <Title
        level={3}
        className='text-center text-white mb-10 '
      >
        About Me
      </Title>

      <div className='flex items-center justify-center'>
        <Card
          style={{
            maxWidth: 400,
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            padding: '4px',
            border: '1px solid #333333',
            borderRadius: '8px'
          }}
        >
          <div className='flex justify-start mb-4 w-auto'>
            <Avatar
              src='/offical.png'
              size={80}
            />
          </div>
          <Title
            level={4}
            style={{ color: 'white', textAlign: 'left' }}
          >
            Deepak Thapa
          </Title>
          <Text
            type='success'
            className='block mb-3 font-bold'
            style={{ color: '#00ee00' }}
          >
            🟢 Online
          </Text>
          <Text style={{ color: 'white' }}>
            <b>Deepak • Designer</b>
            <br />
            <Text
              type='secondary'
              style={{
                color: 'lightgray',
                fontSize: '12px',
                borderBottomWidth: '-6px',
                margin: ''
              }}
            >
              #designer #frontend #developer <br />
              Based in Delhi, a designer and software developer specializing in
              responsive and appealing user experiences.
            </Text>
          </Text>

          <div className='mt-4 mb-4 flex gap-2 justify-center '>
            <a
              href='/resume.pdf'
              download
            >
              <Button
                type='primary'
                icon={<DownloadOutlined />}
                size='small'
                className='text-sm '
              >
                Resume
              </Button>
            </a>
            <a href='/contact'>
              <Button
                type='primary'
                icon={<MessageOutlined />}
                size='small'
                className='text-sm '
              >
                Message
              </Button>
            </a>
            <a href='mailto:deepakthapa1423@gmail.com'>
              <Button
                type='primary'
                icon={<MailOutlined />}
                size='small'
                className='text-xs'
              >
                Email
              </Button>
            </a>
          </div>
        </Card>
      </div>

      <div className='text-left text-white mt-6'>
        <Title
          level={4}
          className='mb-4'
          style={{ color: 'white' }}
        >
          GitHub Repositories
        </Title>
        {loading ? (
          <Spin size='large' />
        ) : repos.length > 0 ? (
          <List
            dataSource={repos}
            style={{
              border: '1px solid #333333',
              borderRadius: '8px',
              padding: '10px',
              background: '#1a1a1a'
            }}
            renderItem={repo => (
              <List.Item
                style={{
                  padding: '10px',
                  marginBottom: '8px',
                  background: '#222222',
                  borderRadius: '6px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <a
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    textDecoration: 'underline',
                    color: 'lightblue',
                    fontWeight: 'bold'
                  }}
                >
                  🔗 {repo.name}
                </a>
                <span style={{ color: 'white' }}>
                  ⭐ {repo.stargazers_count}
                </span>
              </List.Item>
            )}
          />
        ) : (
          <Text
            type='secondary'
            style={{ color: 'lightgray' }}
          >
            No repositories found.
          </Text>
        )}
      </div>
    </div>
  );
};

export default About;
