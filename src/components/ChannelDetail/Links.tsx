import { Stack, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

type LinkType = {
    title : string,
    href : string
}

type LinksPropType = {
    channelId : string | undefined
}

const Links = ({ channelId } : LinksPropType ) : JSX.Element => {
    const linksArr : LinkType[] = [
        {
            title : "Home",
            href : `/channel/${channelId}`
        },
        {
            title : "Videos",
            href : `/channel/${channelId}/videos`
        },
        {
            title : "Playlist",
            href : `/channel/${channelId}/playlists`
        },
        {
            title : "About",
            href : `/channel/${channelId}/about`
        },
    ]

  
    return <Stack gap={8} direction={'row'}>
        {
            linksArr.map(({ title, href }) => <NavLink key={title} title={title} href={href} /> )
        }
    </Stack>
}


export default Links;


const NavLink = ({ title, href } : LinkType) : JSX.Element => {

    const { pathname } = useLocation()
    
    const isActive = (link : string) : boolean => {
        const endingUrl : string | undefined = pathname.split("/")[3]

        if(!endingUrl){
            // it means we are in the /channel/:id i.e. channel homepage;
            if(link.toLowerCase() === 'home') {
                return true
            } else {
                return false
            }
        }
        return endingUrl.toLowerCase() === link.toLowerCase()
    }

    const isActiveLink = isActive(title)


    return (
        <Link
            style={{ 
                textDecoration : "none",
                opacity : isActiveLink ? 1 : 0.6
            }}
            key={title}
            to={href}
        >
            <Typography variant='body2' color={`text.secondary`} >
                {title}
            </Typography>
        </Link>
    )
}