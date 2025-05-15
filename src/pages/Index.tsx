
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import FeaturedBanner from "@/components/music/FeaturedBanner";
import CategorySection from "@/components/music/CategorySection";
import MusicCard from "@/components/music/MusicCard";
import PlaylistCard from "@/components/music/PlaylistCard";
import GenreCard from "@/components/music/GenreCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data - In a real application, these would come from an API
const featuredTrack = {
  title: "Midnight Serenade",
  artist: "Luna Echo",
  description: "Experience the ethereal sounds of Luna Echo's latest single, blending ambient melodies with dynamic beats for a transcendent journey through sound.",
  coverUrl: "https://images.unsplash.com/photo-1482053450283-3e0b78b09a70"
};

const recentTracks = [
  { id: 1, title: "Dreamy Nights", artist: "Ambient Waves", coverUrl: "https://images.unsplash.com/photo-1527698345848-2aaa7565d47d" },
  { id: 2, title: "Electric Soul", artist: "Neon Dreams", coverUrl: "https://images.unsplash.com/photo-1528354930047-5d6961688891" },
  { id: 3, title: "Mountain Echoes", artist: "Nature Sounds", coverUrl: "https://images.unsplash.com/photo-1585338635112-0b3591426f8d" },
  { id: 4, title: "Jazz in Paris", artist: "Smooth Keys", coverUrl: "https://images.unsplash.com/photo-1504898770365-14faca6a7320" },
  { id: 5, title: "Ocean Waves", artist: "Relaxation", coverUrl: "https://images.unsplash.com/photo-1559825481-12a05cc00344" }
];

const recommendedPlaylists = [
  { id: 1, title: "Chill Vibes", description: "Perfect for relaxation or focus", coverUrl: "https://images.unsplash.com/photo-1543830746-2dd0b4b8be17", songCount: 24 },
  { id: 2, title: "Workout Motivation", description: "High-energy tracks to power your exercise", coverUrl: "https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa", songCount: 18 },
  { id: 3, title: "Evening Jazz", description: "Smooth jazz for winding down", coverUrl: "https://images.unsplash.com/photo-1580710894125-ec463767c774", songCount: 15 }
];

const popularGenres = [
  { id: 1, name: "Pop", imageUrl: "https://images.unsplash.com/photo-1487180144351-b8472da7d491" },
  { id: 2, name: "Hip Hop", imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a" },
  { id: 3, name: "Rock", imageUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063" },
  { id: 4, name: "Electronic", imageUrl: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc" },
  { id: 5, name: "Jazz", imageUrl: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf" },
  { id: 6, name: "Classical", imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76" },
];

const topArtists = [
  { id: 1, name: "Luna Echo", genre: "Ambient", coverUrl: "https://images.unsplash.com/photo-1604111159713-02676a839b66" },
  { id: 2, name: "Neon Dreams", genre: "Electronic", coverUrl: "https://images.unsplash.com/photo-1614123763235-726bb9e5548b" },
  { id: 3, name: "The Wavelengths", genre: "Indie Rock", coverUrl: "https://images.unsplash.com/photo-1598387993211-8e5728a99727" },
  { id: 4, name: "Rhythm Collective", genre: "Jazz Fusion", coverUrl: "https://images.unsplash.com/photo-1549834146-d5555ce4afc1" }
];

const Index = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 pt-6 pb-16">
        {/* Featured Track Banner */}
        <FeaturedBanner 
          title={featuredTrack.title}
          artist={featuredTrack.artist}
          description={featuredTrack.description}
          coverUrl={featuredTrack.coverUrl}
          className="mb-10"
        />
        
        {/* Content Tabs */}
        <Tabs defaultValue="forYou" className="mb-10">
          <TabsList className="mb-4">
            <TabsTrigger value="forYou">For You</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="newReleases">New Releases</TabsTrigger>
          </TabsList>
          
          <TabsContent value="forYou" className="space-y-10">
            {/* Recent Tracks */}
            <CategorySection title="Recently Played" seeAllLink="/library">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {recentTracks.map(track => (
                  <MusicCard
                    key={track.id}
                    title={track.title}
                    artist={track.artist}
                    coverUrl={track.coverUrl}
                  />
                ))}
              </div>
            </CategorySection>
            
            {/* Recommended Playlists */}
            <CategorySection title="Recommended Playlists" seeAllLink="/playlists">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recommendedPlaylists.map(playlist => (
                  <PlaylistCard
                    key={playlist.id}
                    title={playlist.title}
                    description={playlist.description}
                    coverUrl={playlist.coverUrl}
                    songCount={playlist.songCount}
                  />
                ))}
              </div>
            </CategorySection>
          </TabsContent>
          
          <TabsContent value="trending">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Trending content will be available soon!</p>
            </div>
          </TabsContent>
          
          <TabsContent value="newReleases">
            <div className="text-center py-12">
              <p className="text-muted-foreground">New releases will be available soon!</p>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Browse by Genre */}
        <CategorySection title="Browse by Genre" seeAllLink="/genres" className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularGenres.map(genre => (
              <GenreCard
                key={genre.id}
                name={genre.name}
                imageUrl={genre.imageUrl}
              />
            ))}
          </div>
        </CategorySection>
        
        {/* Top Artists */}
        <CategorySection title="Top Artists" seeAllLink="/artists">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {topArtists.map(artist => (
              <div key={artist.id} className="flex flex-col items-center text-center">
                <div className="relative w-full aspect-square rounded-full overflow-hidden mb-3">
                  <img 
                    src={artist.coverUrl} 
                    alt={artist.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium">{artist.name}</h3>
                <p className="text-sm text-muted-foreground">{artist.genre}</p>
              </div>
            ))}
          </div>
        </CategorySection>
      </div>
    </MainLayout>
  );
};

export default Index;
