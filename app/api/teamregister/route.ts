import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { teamName, maxTeamSize, expertise,  teamMembers } = await req.json();
    // Check for missing fields
    if (!teamName || !maxTeamSize || !expertise || !teamMembers.length) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Insert team data into Supabase (team_email and team_members are arrays)
    const {  error } = await supabase
      .from("team_information")
      .insert([{
        team_name: teamName,
        team_size: maxTeamSize,
        expertise,
        team_members: teamMembers,  // Array of member objects
      }])
      .select();

    if (error) throw error;

    return NextResponse.json({ message: "Team registered successfully!" }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
  
}
