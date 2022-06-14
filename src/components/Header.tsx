import React, { useState } from 'react';
import { createStyles, Header, Container, Group, Title, Space, Burger, Paper, Transition, Button, Anchor, UnstyledButton  } from '@mantine/core';
import { Link } from "react-router-dom";
import { useBooleanToggle } from '@mantine/hooks';
import { Book } from 'tabler-icons-react';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'sticky',
    zIndex:99,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    [theme.fn.largerThan('sm')]: {
      justifyContent: 'space-between',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  title_next_burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
    minWidth: "200px"
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

const links = [
  {
    "link": "/",
    "label": "Discover"
  },
  {
    "link": "/classes",
    "label": "Classes"
  },
  {
    "link": "/community",
    "label": "Community"
  }
];

export default function HeaderResponsive() {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Anchor
      component={Link}
      key={link.label}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event: { preventDefault: () => void; }) => {
        setActive(link.link);
        toggleOpened(false);
      }}
      underline={false}
    > 
      {link.label}
    </Anchor>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <UnstyledButton  component={Link} to={"/"}>
          <Group
            spacing={5}
            className={classes.links}
            onClick={(event: { preventDefault: () => void; }) => {
              setActive("/");
              toggleOpened(false);
            }}
          >
            <Book />
            <Title order={3}>EduTech</Title>
          </Group>
        </UnstyledButton >
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group spacing={5} className={classes.links}>
          <SignupButton />
          <LoginButton />
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
        <Group className={classes.title_next_burger}>
          <Space w="md" />
          <Book />
          <Title order={3}>EduTech</Title>
        </Group>

        <Transition transition="slide-down" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
              <Button variant="outline">
                Sign up
              </Button>
              <Button>
                Login
              </Button>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}