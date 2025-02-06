"use client";

import { useState, useEffect, useCallback } from "react";
import { X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface TeamMember {
  name: string;
  role: string;
}

interface TeamSize {
  value: string;
  label: string;
  min: number;
  max: number;
}

const TEAM_SIZES: TeamSize[] = [
  { value: "small", label: "1-4 members", min: 1, max: 4 },
  { value: "medium", label: "4-8 members", min: 4, max: 8 },
  { value: "large", label: "10-15 members", min: 10, max: 15 },
];
interface TeamRegistrationDialogProps {
  iisOpen: boolean;
  onClose: () => void;
}

export default function TeamRegistrationDialog({
  iisOpen,
  onClose,
}: TeamRegistrationDialogProps) {
  const [teamName, setTeamName] = useState("");
  const [teamSize, setTeamSize] = useState<string>("");
  const [expertise, setExpertise] = useState("");
  const [teamEmail, setTeamEmail] = useState("");
  const [teamEmails, setTeamEmails] = useState<string[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [showMemberInputs, setShowMemberInputs] = useState(false);
  const [maxTeamSize, setMaxTeamSize] = useState<number | null>(null);
  const [currentMember, setCurrentMember] = useState<TeamMember>({
    name: "",
    role: "",
  });
  const [error, setError] = useState("");

  // Get the selected team size limits
  const getSelectedTeamSize = useCallback(() => {
    return TEAM_SIZES.find((size) => size.value === teamSize);
  }, [teamSize]);

  // Check if can add more members
  const canAddMoreMembers = () => {
    const selectedSize = getSelectedTeamSize();
    if (!selectedSize) return false;
    return teamMembers.length < selectedSize.max;
  };

  // Check if minimum members requirement is met
  const hasMinimumMembers = () => {
    const selectedSize = getSelectedTeamSize();
    if (!selectedSize) return false;
    return teamMembers.length >= selectedSize.min;
  };

  const handleAddMember = () => {
    if (!currentMember.name || !currentMember.role) {
      setError("Please fill in both name and role for the team member");
      return;
    }

    if (!canAddMoreMembers()) {
      setError(`You can't add more than ${getSelectedTeamSize()?.max} members`);
      return;
    }

    setTeamMembers([...teamMembers, currentMember]);
    setCurrentMember({ name: "", role: "" });
    setError("");

    // Hide member inputs if we've reached the maximum
    if (teamMembers.length + 1 >= (getSelectedTeamSize()?.max || 0)) {
      setShowMemberInputs(false);
    }
  };

  const handleRemoveMember = (index: number) => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
    setError("");
  };

  const handleRegister = async () => {
    if (!teamName || !teamSize || !expertise || teamEmails.length === 0) {
      setError("Please fill in all required fields");
      return;
    }

    if (!hasMinimumMembers()) {
      setError(`You need at least ${getSelectedTeamSize()?.min} team members`);
      return;
    }

    try {
      const response = await fetch("/api/teamregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamName,
          maxTeamSize,
          expertise,
          teamEmails,
          teamMembers,
        }),
      });

      if (!response.ok) {
        alert("Failed to submit team registration");
      }

      // Handle successful submission
      alert("Team registration submitted successfully");
      setTeamName("");
      setTeamSize("");
      setExpertise("");
      setTeamEmail("");
      setTeamEmails([]);
      setTeamMembers([]);
      setShowMemberInputs(false);
      setCurrentMember({ name: "", role: "" });
      setError("");
      onClose();
    } catch (error) {
      alert("Failed to submit team registration. Please try again.");
      console.error("Error submitting team registration:", error);
    }
  };

  // Reset member inputs when team size changes
  useEffect(() => {
    setTeamMembers([]);
    setShowMemberInputs(false);
    setCurrentMember({ name: "", role: "" });
    setError("");
    const selectedSize = getSelectedTeamSize();
    if (selectedSize) {
      setMaxTeamSize(selectedSize.max);
    } else {
      setMaxTeamSize(null);
    }
  }, [teamSize]);

  return (
    <Dialog open={iisOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-semibold">
              Team Registration
            </DialogTitle>
            {/* <Button
              variant="ghost"
              className="h-6 w-6 p-0 rounded-full"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button> */}
          </div>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Team Name
            </label>
            <Input
              placeholder="Enter team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Team Size
            </label>
            <Select value={teamSize} onValueChange={setTeamSize}>
              <SelectTrigger>
                <SelectValue placeholder="Select team size" />
              </SelectTrigger>
              <SelectContent>
                {TEAM_SIZES.map((size) => (
                  <SelectItem key={size.value} value={size.value}>
                    {size.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Primary Expertise
            </label>
            <Select value={expertise} onValueChange={setExpertise}>
              <SelectTrigger>
                <SelectValue placeholder="Select expertise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Team Emails
            </label>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter team email"
                value={teamEmail}
                onChange={(e) => setTeamEmail(e.target.value)}
              />
              <Button
                onClick={() => {
                  if (teamEmail && !teamEmails.includes(teamEmail)) {
                    setTeamEmails([...teamEmails, teamEmail]);
                    setTeamEmail("");
                  }
                }}
              >
                Add
              </Button>
            </div>
            {teamEmails.length > 0 && (
              <div className="mt-2 space-y-1">
                {teamEmails.map((email, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-100 p-2 rounded"
                  >
                    <span>{email}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setTeamEmails(teamEmails.filter((_, i) => i !== index))
                      }
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {teamSize && (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">
                  Team Members ({teamMembers.length}/
                  {getSelectedTeamSize()?.max})
                </label>
                {canAddMoreMembers() && !showMemberInputs && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowMemberInputs(true)}
                  >
                    Add Team Member
                  </Button>
                )}
              </div>

              {showMemberInputs && (
                <div className="space-y-4 border rounded-lg p-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Member Name
                    </label>
                    <Input
                      placeholder="Enter member name"
                      value={currentMember.name}
                      onChange={(e) =>
                        setCurrentMember({
                          ...currentMember,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Member Role
                    </label>
                    <Input
                      placeholder="Enter member role"
                      value={currentMember.role}
                      onChange={(e) =>
                        setCurrentMember({
                          ...currentMember,
                          role: e.target.value,
                        })
                      }
                    />
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleAddMember}
                  >
                    Add Member
                  </Button>
                </div>
              )}

              {teamMembers.length > 0 && (
                <div className="space-y-2">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-2 bg-gray-50 rounded"
                    >
                      <div>
                        <span className="font-medium">{member.name}</span>
                        <span className="text-gray-500 ml-2">
                          ({member.role})
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-gray-500 hover:text-red-500"
                        onClick={() => handleRemoveMember(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>

        <Button
          className="w-full bg-[#F5A623] hover:bg-[#F5A623]/90 text-white"
          size="lg"
          onClick={handleRegister}
        >
          Register Team
        </Button>
      </DialogContent>
    </Dialog>
  );
}
