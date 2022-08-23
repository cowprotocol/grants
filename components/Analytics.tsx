import React, { useState, useEffect } from 'react';
import Router from 'next/router'
import ReactGA from 'react-ga';
import { Media } from 'const/styles/variables'
import useMediaQuery from 'lib/hooks/useMediaQuery';

const trackingId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

function handleRouteChange(url: string) {
  console.log('[Analytics] Page view', url)
  ReactGA.pageview(url);
}

function initializeAnalytics(isMobile) {
  console.log('[Analytics] Tracking ID', trackingId)
  ReactGA.initialize(trackingId, {
    gaOptions: {
      storage: 'none',
      storeGac: false,
    },
  })
  ReactGA.set({
    anonymizeIp: true,
    customBrowserType: !isMobile
      ? 'desktop'
      : 'web3' in window || 'ethereum' in window
        ? 'mobileWeb3'
        : 'mobileRegular',
  })


  // Handle all route changes
  handleRouteChange(Router.pathname)
  Router.events.on('routeChangeComplete', handleRouteChange)
}

export function Analytics() {

  // Internal state
  const [analytics, setAnalytics] = useState({
    isInitialized: false
  })

  const isMobile = useMediaQuery(`(max-width: ${Media.smallScreen})`);

  // Use effect is used so the code is only executed client side (not server side)
  useEffect(() => {
    const { isInitialized } = analytics

    // Initialize Analytics
    if (trackingId && !isInitialized) {
      initializeAnalytics(isMobile)
      setAnalytics(prev => ({
        ...prev,
        isInitialized: true
      }))
    }

    return () => {
      // clean up
      if (isInitialized) {
        Router.events.off('routeChangeComplete', handleRouteChange);
      }
    }
  }, [analytics, isMobile])

  return null
}
