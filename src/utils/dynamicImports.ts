import dynamic from 'next/dynamic';
import { Skeleton } from '@mui/material';
import React from 'react';

// Composant de chargement par défaut
const DefaultLoading = function DefaultLoading() {
  return React.createElement(Skeleton, {
    variant: "rectangular",
    width: "100%",
    height: 200
  });
};

// Composants dynamiques avec chargement personnalisé
export const DynamicFormationsCard = dynamic(
  () => import('@/components/FormationsCard'),
  {
    loading: function Loading() {
      return React.createElement(DefaultLoading);
    },
    ssr: true
  }
);

export const DynamicPortfolioComponent = dynamic(
  () => import('@/components/PortfolioComponent'),
  {
    loading: function Loading() {
      return React.createElement(DefaultLoading);
    },
    ssr: false
  }
);

export const DynamicServicesComponent = dynamic(
  () => import('@/components/ServicesComponent'),
  {
    loading: function Loading() {
      return React.createElement(DefaultLoading);
    },
    ssr: true
  }
);

export const DynamicPresentationComponent = dynamic(
  () => import('@/components/PresentationComponent'),
  {
    loading: function Loading() {
      return React.createElement(DefaultLoading);
    },
    ssr: true
  }
);
