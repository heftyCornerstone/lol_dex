"use server";

import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
  const token = process.env.RIOT_API_KEY;

  try {
    if (!token)
      return NextResponse.json({ error: "No token!" }, { status: 500 });
    const rotationRes = await fetch(url, {
      headers: {
        "X-Riot-Token": token,
      },
    });
    const rotation: ChampionRotation = await rotationRes.json();

    return NextResponse.json(rotation);
  } catch (error) {
    throw error;
  }
}
